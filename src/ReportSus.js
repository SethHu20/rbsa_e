import React from 'react'


export default function ReportSus() {
  return (
    <> 
      Title your report:
      <input type="text"/>
      <br/><br/>
      Report Category:<br/>
      <input type="checkbox"/>Spam<br/>
      <span><input type="checkbox"/>Advetisement</span><br/>
      <span><input type="checkbox"/>Potential Scam</span><br/>
      <br/>
      <button onClick={()=>{ alert('Report Successful!'); }}>Report</button>

      
  
    </>

  )
}
