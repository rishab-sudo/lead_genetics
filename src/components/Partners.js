import './Partners.css';
import React from 'react';

const PARTNERS=[{id:'icar',name:'ICAR',logo:'/assets/icar.png'},
    {id:'dst',name:'DST',logo:'/assets/dst.png'},
    {id:'csir',name:'CSIR',logo:'/assets/csir.png'},
    {id:'icmr',name:'ICMR',logo:'/assets/icmr.png'},
    {id:'dbt',name:'DBT',logo:'/assets/dbt.png'}];

export default function Partners()
{return(
<section className='partners-section'>
    <div className='partners-header'><span className='eyebrow'>Trusted Research Partners</span>
    <h2>Our Scientific Collaborations</h2>
    <p>Working alongside India's leading research institutions.</p></div>
    <div className='partners-stage'>{PARTNERS.map(item=><article key={item.id} className='partner-card'><div className='glass-block'><img src={"../assets/brands5.png"} alt={item.name}/></div><div className='pedestal'></div></article>)}</div></section>);}
