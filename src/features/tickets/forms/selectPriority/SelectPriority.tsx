import { TICKET_PRIORITY } from '../../../../constraints/constraints'
import RadioInput from '../../../../components/radioInput/RadioInput'
import Style from './SelectPriority.module.css'

type Props = {
  register: { name: string }
}

export default function SelectPriority({ register }: Props) {
  return (
    <div className={Style['select-priority-container']}>
      <p className={Style['select-priority__title']}>Select Priority</p>
      <div className={Style['select-priority']}>
        {
          TICKET_PRIORITY.map((prioirty) => (
            <RadioInput
              label={prioirty}
              value={prioirty}
              id={prioirty}
              key={prioirty}
              {...register}
            />
          ))
        }
      </div>
    </div>
  )
}