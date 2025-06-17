import Table from '../../../../components/table/Table'
import THead from '../../../../components/table/THead'
import TH from '../../../../components/table/TH'
import TBody from '../../../../components/table/TBody'
import TR from '../../../../components/table/TR'
import TD from '../../../../components/table/TD'
import { formateDate } from '../../../../libs/formate-date'
import { ITag } from '../../../../types/types'
import Button from '../../../../components/button/Button'
import { useCallback, useState } from 'react'
import UpdateTagForm from '../forms/updateTagForm/UpdateTagForm'
import CreateTagForm from '../forms/createTagForm/CreateTagForm'
import useDeleteApiData from '../../../../hooks/use-delete-api-data'
import LoadingIcon from '../../../../components/loadingIcon/LoadingIcon'
import { X } from 'lucide-react'
import Can from '../../../../components/can/Can'

type Props = {
  tags: ITag[]
}
export default function RenderTags({ tags }: Readonly<Props>) {
  const [isUpdating, setIsUpdating] = useState<[boolean, string]>([false, ""])
  const [deletedId, setDeletedId] = useState('')

  const handleIsUpdating = useCallback((boolean: boolean, id: string) => {
    console.log([boolean, id])
    setIsUpdating([boolean, id])
  }, [])

  const {
    mutateAsync: deleteTag,
    isPending: isDeleting
  } = useDeleteApiData({ endpoint: '/tags', revalidateKey: ['/tags'] })

  const handleDeleteTag = useCallback(async (id: string) => {
    setDeletedId(id)
    await deleteTag(id)
  }, [])

  const renderTags = tags?.map((tag) => (
    <TR key={tag?._id}>
      {isUpdating[0] && isUpdating[1] === tag?._id ?
        <>
          <TD dataCell='name' colSpan={2}>
            <UpdateTagForm tagId={tag?._id} setIsUpdating={setIsUpdating} />
          </TD>
          <TD dataCell="actions">
            <Button size='xs' variant={'danger'} shape={'none'} onClick={() => handleIsUpdating(false, '')}>
              <X size={14} strokeWidth={3} />
              cancel update
            </Button>
          </TD>
        </>
        :
        <>
          <TD dataCell='name'>
            {tag?.name}
          </TD>
          <TD dataCell='created at'>{formateDate(tag?.createdAt)}</TD>
          <Can permission='canEdit' route='tag'>
            <TD dataCell='Actions'>
              <div style={{ display: 'flex', gap: '2px', justifyContent: 'end' }}>
                <Button size='xs' variant={'info'} shape={'none'} onClick={() => handleIsUpdating(true, tag?._id)}>
                  update
                </Button>
                <Can permission='canDelete' route='tag'>
                  <Button size='xs' variant='danger' shape='none' disabled={isDeleting} onClick={() => handleDeleteTag(tag?._id)}>
                    {isDeleting && deletedId === tag?._id ? <LoadingIcon /> : ''}
                    Delete
                  </Button>
                </Can>
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
          <Can permission='canEdit' route='tag'>
            <TH>
              Actions
            </TH>
          </Can>
        </THead>
        <TBody>
          {renderTags}
          <Can permission='canEdit' route='tag'>
            <TR>
              <TD colSpan={3} dataCell="">
                <CreateTagForm />
              </TD>
            </TR>
          </Can>
        </TBody>
      </Table>
    </div>
  )
}


RenderTags.displayName = 'RenderTags'