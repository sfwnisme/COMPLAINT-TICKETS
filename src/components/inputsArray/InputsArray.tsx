import { Fragment } from 'react'
import Input from '../input/Input'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import PasswordInput from '../input/PasswordInput'

type InputProps<T extends FieldValues> = {
  name: Path<T>,
  type: "text" | "email" | "password",
  placeholder?: string,
  title?: string,
  message?: string
}

type Props<T extends FieldValues> = {
  inputs: InputProps<T>[],
  register: UseFormRegister<T>
}

export default function InputsArray<T extends FieldValues>({ inputs, register }: Props<T>) {

  const renderInputs = inputs.map((input) => (
    <Fragment key={input.name}>
      {input.type !== 'password'
        ? <Input
          type={input.type}
          {...register(input?.name)}
          placeholder={input?.placeholder}
          title={input?.title}
          message={input.message}
          variant={input.message ? "danger" : 'primary'}
        />
        : <PasswordInput
          type={input.type}
          {...register(input.name)}
          placeholder={input.placeholder}
          title={input.title}
          message={input.message}
          variant={input.message ? "danger" : 'primary'}
        />
      }
    </Fragment>
  ))

  return renderInputs
}