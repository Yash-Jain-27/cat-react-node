import * as React from 'react';
import { useStyles } from './style';
import AccordionComponent from '../components/accordion';

function ListComponent(props) {
    const classes = useStyles()
    const { catList } = props

    return (
        <div className={classes.listComponent}>
            {catList.map((item) => {
                return <AccordionComponent key={item.id} catDetails={item} />
            })}
        </div>
    );
}

export default ListComponent;
