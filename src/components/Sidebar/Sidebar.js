import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { List, Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap'
import classNames from 'classnames'



import sidebarData from '../../components/Sidebar/data'

function Sidebar(props) {
    const [active, setActive] = useState(0);
    const [accordion, setAccordion] = useState(false);;

    const [index, setIndex] = useState("1");

    const hanleSidebarActive = (e) => {
        setActive(e)
    }

    const accordionToggle = (newIndex) => {
        // console.log(newIndex);
        if (newIndex === index) {
            setIndex("1");
        } else {
            setIndex(newIndex);
        }
    }

    const sidebarToggle = () => {
        let screnWidth = window.screen.width;

        if (screnWidth < 767) {
            props.sidebarToggle()
        }

    }

    return (
        <aside className={classNames('sidebar')} >

            <Accordion
                open={index}
                toggle={accordionToggle}
                tag="ul"
            >

                {
                    sidebarData.map((e, i) => {

                        {
                            return e.child ? <AccordionItem tag="li" key={e.id}>
                                <AccordionHeader targetId={e.id}>
                                    {e.title}
                                </AccordionHeader>

                                <AccordionBody accordionId={e.id} tag="ul">
                                    {
                                        e.child && e.child.map(ch => {
                                            return <li key={ch.cId} className='active' >
                                                <Link to={ch.link} className='single-item-link' onClick={() => sidebarToggle()}>
                                                    <i className="mdi mdi-minus"></i>
                                                    <span className='title'>{ch.title}</span>

                                                </Link>
                                            </li>
                                        })
                                    }

                                </AccordionBody>
                            </AccordionItem>
                                :
                                <li key={e.id}
                                    className={active === i ? "active " : null}
                                    onClick={() => hanleSidebarActive(i)}
                                >
                                    <Link to={e.link} className='single-item-link' onClick={() => sidebarToggle()}>
                                        <i className={e.icon}></i>
                                        <span className='title'>{e.title}</span>

                                    </Link>
                                </li>
                        }



                    })
                }


            </Accordion>
        </aside >
        // <aside className={classNames('sidebar', { minified: props.toggle })} >
        //     <List type="unstyled">
        //         {
        //             sidebarData.map((e, i) => {
        //                 return (
        //                     <li key={e.id}
        //                         className={active === i ? "active " : null}
        //                         onClick={() => hanleSidebarActive(i)}
        //                     >
        //                         <Link to={e.link} className='single-item-link'>
        //                             <i className={e.icon}></i>
        //                             <span className='title'>{e.title}</span>

        //                         </Link>
        //                     </li>
        //                 )
        //             })
        //         }

        //     </List>
        // </aside >
    )
}


export default withRouter(Sidebar)