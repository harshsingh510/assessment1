import React from 'react'

import './List.css'
import Card from '../Card/Card'

// let cardCount = 0;

export default function List(props) {
    const cardCount = props.ticketDetails.reduce((count, ticket) => {
        if (ticket.status === props.listTitle ||
            ticket.priority === props.listTitle ||
            ticket.userObj.name === props.listTitle) {
            return count + 1;
        }
        return count;
    }, 0);
    return (
        <>

            <div className="list-container">
                <div className="list-header">
                    <div className="list-header-left">
                        {
                            {
                                'status': <>{
                                    {
                                        'Backlog': <div className="list-icon">
                                            <img src='/icons_FEtask/Backlog.svg' alt="icon" />
                                        </div>,
                                        'Todo': <div className="list-icon">
                                            <img src='/icons_FEtask/To-do.svg' alt="icon" />
                                        </div>,
                                        'In progress': <div className="list-icon">
                                            <img src='/icons_FEtask/in-progress.svg' alt="icon" />
                                        </div>,
                                        'Done': <div className="list-icon">
                                            <img src='/icons_FEtask/Done.svg' alt="icon" />
                                        </div>,
                                        'Cancelled': <div className="list-icon">
                                            <img src='/icons_FEtask/Cancelled.svg' alt="icon" />
                                        </div>
                                    }[props.listTitle]
                                } </>,
                                'user': <>
                                    {

                                        <div className="card-profile">
                                            <div className="card-profile-initial">
                                                {props.listTitle[0]}{props.listTitle[1]}
                                            </div>
                                            <div className={props.listTitle !== 'Anoop sharma' ?
                                                "card-profile-initial-available card-profile-initial-available-true" :
                                                "card-profile-initial-available"}>
                                            </div>
                                        </div>

                                    }
                                </>,
                                'priority': <>{
                                    {
                                        0: <div className="list-tag-icon"><img src='/icons_FEtask/No-priority.svg' alt="icon" /></div>,
                                        1: <div className="list-tag-icon"><img src='/icons_FEtask/Img - Low Priority.svg' alt="icon" /></div>,
                                        2: <div className="list-tag-icon"><img src='/icons_FEtask/Img - Medium Priority.svg' alt="icon" /></div>,
                                        3: <div className="list-tag-icon"><img src='/icons_FEtask/Img - High Priority.svg' alt="icon" /></div>,
                                        4: <div className="list-tag-icon"><img src='/icons_FEtask/SVG - Urgent Priority colour.svg' alt="icon" /></div>


                                    }[props.listTitle]
                                } </>
                            }[props.groupValue]
                        }

                        <div className="list-title">
                            {
                                {
                                    'priority': <>{
                                        props.priorityList
                                            ? props.priorityList.map(priorityProperty => (
                                                priorityProperty.priority === props.listTitle
                                                    ? <>{priorityProperty.name}</>
                                                    : null
                                            ))
                                            : null
                                    }</>,
                                    'status': <>{props.listTitle}</>,
                                    'user': <>{props.listTitle}</>
                                }[props.groupValue]
                            }
                        </div>
                        <div className="list-sum">{cardCount}</div>
                    </div>
                    <div className="list-header-right">
                        <div className="list-add-item">
                            <img src='/icons_FEtask/add.svg' alt="icon" />
                        </div>
                        <div className="list-option-item">
                            <img src='/icons_FEtask/3 dot menu.svg' alt="icon" />
                        </div>
                    </div>
                </div>

                <div className="list-card-items">
                    {
                        props.ticketDetails.map(ticket => {
                            if (ticket.status === props.listTitle) {
                                // cardCount++;
                                return (<Card cardDetails={ticket}
                                    groupValue={props.groupValue} />)
                            }
                            else if (ticket.priority === props.listTitle) {
                                // cardCount++;
                                return (<Card cardDetails={ticket}
                                    groupValue={props.groupValue} />)
                            }
                            else if (ticket.userObj.name === props.listTitle) {
                                // cardCount++;
                                return (<Card cardDetails={ticket}
                                    groupValue={props.groupValue} />)
                            }
                            return null
                        })

                    }
                </div>
            </div>
        </>
    )
}
