import { Folder, History, Info } from 'lucide-react'
import Badge from '../../../../../components/badge/Badge'
import Divider from '../../../../../components/divider/Divider'
import FileChip from '../../../../../components/fileChip/FileChip'
import { TICKET_STATUS_COLORS } from '../../../../../constraints/constraints'
import { formateDate } from '../../../../../libs/formate-date'
import { ITicket } from '../../../../../types/types'
import Style from './TicketSidebar.module.css'
import HelpText from '../../../../../components/helpText/HelpText'
import SelectStatusForm from '../../../forms/selectStatusForm/SelectStatusForm'
import { useEffect, useState } from 'react'
import Button from '../../../../../components/button/Button'
import SelectUserForm from '../../../forms/selectUserForm/SelectUserForm'
import SelectDepartmentForm from '../../../forms/selectDepartmentForm/SelectDepartmentForm'
import Can from '../../../../../components/can/Can'
import TicketIfOpen from '../../../../../components/ticketIfOpen/TicketIfOpen'
import Spacer from '../../../../../components/spacer/Spacer'
type Props = {
  ticket: ITicket,
}

export default function TicketSidebar({ ticket }: Props) {
  const [isStatusEdit, setIsStatusEdit] = useState(false)
  const [isAssigneeEdit, setIsAssigneeEdit] = useState(false)
  const [isDepartmentEdit, setIsDepartmentEdit] = useState(false)

  const handleStatusEdit = () => {
    setIsStatusEdit(prev => !prev)

  }
  useEffect(() => {
    if (ticket.status === 'closed' || ticket.status === 'resolved') {
      setIsAssigneeEdit(false)
      setIsDepartmentEdit(false)
    }
  }, [ticket.status])

  return (
    <div className={Style['ticket-sidebar']}>
      <div className={Style['ticket-sidebar__info']}>
        <h4 className={Style['ticket-sidebar__title']}><Info size={18} />Ticket Info</h4>
        <div className={Style['ticket-sidebar__header']}>
          <strong>Ticket id</strong>
          <p className={Style['ticket-sidebar__ticket-id']}>{ticket?._id}</p>
          <strong>Author</strong>
          <p className={Style['ticket-sidebar__author']}>{ticket?.createdBy?.name ?? ""}</p>
          <strong>Assigned to</strong>
          <div style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>
            {!isAssigneeEdit
              ?
              <p className={Style['ticket-sidebar__assignee']}>{ticket?.assignedTo?.name ?? <Badge variant='warning' text="public" dot />}</p>
              :
              <SelectUserForm defaultValue={ticket?.assignedTo?._id} ticketId={ticket?._id} />
            }
            <Can permission='canEdit' route='ticket'>
              <TicketIfOpen ticketId={ticket?._id}>
                <Button variant={!isAssigneeEdit ? 'info' : 'danger'} shape='none' size='xs' onClick={() => setIsAssigneeEdit(prev => !prev)}>{!isAssigneeEdit ? 'Edit' : 'Close'}</Button>
              </TicketIfOpen>
            </Can>
          </div>
          <strong>Department</strong>
          <div style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>
            {!isDepartmentEdit
              ?
              <p className={Style['ticket-sidebar__department']}>{ticket?.department?.title ?? <Badge variant='warning' text="public" dot />}</p>
              :
              <SelectDepartmentForm defaultValue={ticket?.department?._id} ticketId={ticket?._id} />
            }
            <Can permission='canEdit' route='ticket'>
              <TicketIfOpen ticketId={ticket?._id}>
                <Button variant={!isDepartmentEdit ? 'info' : 'danger'} shape='none' size='xs' onClick={() => setIsDepartmentEdit(prev => !prev)}>{!isDepartmentEdit ? 'Edit' : 'Close'}</Button>
              </TicketIfOpen>
            </Can>
          </div>
          <strong>Created on</strong>
          <p className={Style['ticket-sidebar__create-date']}>{formateDate(ticket?.createdAt)}</p>
          <strong>Last update</strong>
          <p className={Style['ticket-sidebar__update-date']}>{formateDate(ticket?.updatedAt)}</p>
        </div>
        <Divider />
        <div className={Style['ticket-sidebar__body']}>
          <strong>Status</strong>
          <div style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>
            {
              !isStatusEdit
                ?
                <Badge variant={TICKET_STATUS_COLORS[ticket?.status]} text={ticket?.status} />
                :
                <div>
                  <SelectStatusForm defaultValue={ticket.status} ticketId={ticket._id} />
                </div>
            }
            <Can permission='canEdit' route='ticket'>
              <Button variant={!isStatusEdit ? 'info' : 'danger'} shape='none' size='xs' onClick={handleStatusEdit}>{!isStatusEdit ? 'Edit' : 'Close'}</Button>
            </Can>
          </div>
        </div>
        <>
          <Divider />
          <div className={Style['ticket-sidebar__footer']}>
            <strong>Tags</strong>
            {
              ticket.tags.map((tag) => (
                <Badge customColor={tag?.color} text={tag?.name} key={tag._id} />
              ))
            }
            {ticket.tags.length === 0 && <HelpText icon='visible'>No tags yet</HelpText>}
          </div>
        </>
      </div>
      <div className={Style['ticket-sidebar__files']}>
        <h4 className={Style['ticket-sidebar__title']}><Folder size={18} /> Attachments</h4>
        <FileChip name='profile.png' size='3Mb' />
        <Spacer />
        <HelpText>This is an example for what will be in the next version</HelpText>
      </div>
      <div className={Style['ticket-sidebar__log']}>
        <h4 className={Style['ticket-sidebar__title']}><History size={18} /> History</h4>
        <HelpText icon='visible'>In the next version this will be updated</HelpText>
      </div>
    </div>
  )
}
