import React, { useState } from 'react';
import './Card.css'
export default function Card(props) {
    return (
        <>
            <div className="card-container">
                <div className="card-id-wrapper">
                    <div className="card-id">{props.cardDetails.id}</div>
                    {props.groupValue != 'user' && (
                        <div className="card-profile">
                            <div className="card-profile-initial">{props.cardDetails.userObj.name[0]}{props.cardDetails.userObj.name[1]}</div>
                            <div className={props.cardDetails.userObj.available ? "card-profile-initial-available card-profile-initial-available-true" : "card-profile-initial-available"}></div>
                        </div>
                    )}
                </div>
                <div className="card-title">
                    {props.groupValue != 'status' &&
                        {
                            'Backlog': <div className="card-title-icon">
                                <img src='/icons_FEtask/Backlog.svg' alt="icon" />
                            </div>,
                            'Todo': <div className="card-title-icon">
                                <img src='/icons_FEtask/To-do.svg' alt="icon" />
                            </div>,
                            'In progress': <div className="card-title-icon">
                                <img src='/icons_FEtask/in-progress.svg' alt="icon" />
                            </div>,
                            'Done': <div className="card-title-icon">
                                <img src='/icons_FEtask/Done.svg' alt="icon" />
                            </div>,
                            'Cancelled': <div className="card-title-icon">
                                <img src='/icons_FEtask/Cancelled.svg' alt="icon" />
                            </div>
                        }[props.cardDetails.status]
                    }

                    {props.cardDetails.title}
                </div>
                <div className="card-tag">
                    {props.groupValue != 'priority' &&
                        {
                            0: <div className="card-tag-icon"><img src='/icons_FEtask/No-priority.svg' alt="icon" /></div>,
                            1: <div className="card-tag-icon"><img src='/icons_FEtask/Img - Low Priority.svg' alt="icon" /></div>,
                            2: <div className="card-tag-icon"><img src='/icons_FEtask/Img - Medium Priority.svg' alt="icon" /></div>,
                            3: <div className="card-tag-icon"><img src='/icons_FEtask/Img - High Priority.svg' alt="icon" /></div>,
                            4: <div className="card-tag-icon"><img src='/icons_FEtask/SVG - Urgent Priority grey.svg' alt="icon" /></div>
                        }[props.cardDetails.priority]
                    }

                    {
                        props.cardDetails.tag.map((tag) => {
                            return (
                                <div className="card-tag-box">
                                    <div className="card-tag-title">{tag}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        </>
    )
}
