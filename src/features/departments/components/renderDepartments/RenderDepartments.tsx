import Table from '../../../../components/table/Table'
import THead from '../../../../components/table/THead'
import TH from '../../../../components/table/TH'
import TBody from '../../../../components/table/TBody'
import TR from '../../../../components/table/TR'
import TD from '../../../../components/table/TD'
import { formateDate } from '../../../../libs/formate-date'
import { IDepartment } from '../../../../types/types'
import Button from '../../../../components/button/Button'
import { useCallback, useState } from 'react'
import UpdateDepartmentForm from '../forms/updateDepartmentForm/UpdateDepartmentForm'
import CreateDepartmentForm from '../forms/createDepartmentForm/CreateDepartmentForm'
import useDeleteApiData from '../../../../hooks/use-delete-api-data'
import LoadingIcon from '../../../../components/loadingIcon/LoadingIcon'
import { X } from 'lucide-react'
import Can from '../../../../components/can/Can'

type Props = {
  departments: IDepartment[]
}
export default function RenderDepartments({ departments }: Readonly<Props>) {
  const [isUpdating, setIsUpdating] = useState<[boolean, string]>([false, ""])
  const [deletedId, setDeletedId] = useState('')

  const handleIsUpdating = useCallback((boolean: boolean, id: string) => {
    console.log([boolean, id])
    setIsUpdating([boolean, id])
  }, [])

  const {
    mutateAsync: deleteDepartment,
    isPending: isDeleting
  } = useDeleteApiData({ endpoint: '/departments', revalidateKey: ['/departments'] })

  const handleDeleteDepartment = useCallback(async (id: string) => {
    setDeletedId(id)
    await deleteDepartment(id)
  }, [])

  const renderDepartments = departments?.map((department) => (
    <TR key={department?._id}>
      {isUpdating[0] && isUpdating[1] === department?._id ?
        <>
          <TD dataCell='title' colSpan={2}>
            <UpdateDepartmentForm departmentId={department?._id} setIsUpdating={setIsUpdating} />
          </TD>
          <TD dataCell="actions">
            <Button variant={'danger'} shape={'none'} onClick={() => handleIsUpdating(false, '')}>
              <X size={14} strokeWidth={3} />
              cancel update
            </Button>
          </TD>
        </>
        :
        <>
          <TD dataCell='title'>
            {department?.title}
          </TD>
          <TD dataCell='created at'>{formateDate(department?.createdAt)}</TD>
          <Can permission='canEdit' route='department'>
            <TD dataCell='Actions'>
              <div style={{ display: 'flex', gap: '2px', justifyContent: 'end' }}>
                <Button size='xs' variant={'info'} shape={'none'} onClick={() => handleIsUpdating(true, department?._id)}>
                  update
                </Button>
                <Button size='xs' variant='danger' shape='none' disabled={isDeleting} onClick={() => handleDeleteDepartment(department?._id)}>
                  {isDeleting && deletedId === department?._id ? <LoadingIcon /> : ''}
                  Delete
                </Button>
              </div>
            </TD>
          </Can>
        </>
      }
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
          <Can permission='canEdit' route='department'>
            <TH>
              Actions
            </TH>
          </Can>
        </THead>
        <TBody>
          {renderDepartments}
          <Can permission='canEdit' route='department'>
            <TR>
              <TD colSpan={3}>
                <CreateDepartmentForm />
              </TD>
            </TR>
          </Can>
        </TBody>
      </Table>
    </div>
  )
}


RenderDepartments.displayName = 'RenderDepartments'