import Table from '../../../../components/table/Table'
import THead from '../../../../components/table/THead'
import TH from '../../../../components/table/TH'
import TBody from '../../../../components/table/TBody'
import TR from '../../../../components/table/TR'
import TD from '../../../../components/table/TD'
import { formatedDate } from '../../../../libs/formated-date'
import { IDepartment } from '../../../../types/types'
import Button from '../../../../components/button/Button'
import { useCallback, useState } from 'react'
import UpdateDepartmentForm from '../forms/updateDepartmentForm/UpdateDepartmentForm'
import CreateDepartmentForm from '../createDepartmentForm/CreateDepartmentForm'
import useDeleteApiData from '../../../../hooks/use-delete-api-data'
import LoadingIcon from '../../../../components/loadingIcon/LoadingIcon'

type Props = {
  departments: IDepartment[]
}
export default function RenderDepartments({ departments }: Readonly<Props>) {
  console.log('departments', departments)
  const [isUpdating, setIsUpdating] = useState<[boolean, string]>([false, ""])

  const handleIsUpdating = useCallback((boolean: boolean, id: string) => {
    setIsUpdating([boolean, id])
  }, [])

  const {
    mutateAsync: deleteDepartment,
    isPending: isDeleting
  } = useDeleteApiData({ endpoint: '/departments', revalidateKey: ['/departments'] })
  const renderDepartments = departments?.map((department) => (
    <TR key={department?._id}>
      <TD dataCell='title'>
        {
          isUpdating[0] && isUpdating[1] === department?._id ?
            <UpdateDepartmentForm departmentId={department?._id} setIsUpdating={setIsUpdating} />
            :
            department?.title
        }
      </TD>
      <TD dataCell='created at'>{!isUpdating[0] && isUpdating[1] !== department?._id && formatedDate(department?.createdAt)}</TD>
      <TD dataCell='Actions'>
        <div style={{ display: 'flex', gap: '2px', justifyContent: 'end' }}>
          {
            isUpdating[0] && isUpdating[1] === department?._id
              ? <Button size='xs' variant={'info'} shape={'default'} onClick={() => handleIsUpdating(false, '')}>
                cancel update
              </Button>
              : <>
                <Button size='xs' variant={'info'} shape={'soft'} onClick={() => handleIsUpdating(true, department?._id)}>
                  update
                </Button>
                <Button size='xs' variant='danger' shape='soft' disabled={isDeleting} onClick={() => deleteDepartment(department?._id)}>
                  {isDeleting && <LoadingIcon />}
                  Delete
                </Button>
              </>
          }
        </div>
      </TD>
    </TR>
  ))

  return (
    <div>
      <Table>
        <THead>
          <TH>
            name
          </TH>
          <TH>
            created at
          </TH>
          <TH>
            Actions
          </TH>
        </THead>
        <TBody>
          {renderDepartments}
        </TBody>
      </Table>
      <CreateDepartmentForm />
    </div>
  )
}
