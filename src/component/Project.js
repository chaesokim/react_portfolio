import interviewDBlink from '../json/preinterview.json';

const Preinterview = (props) => {
    
    const interviewjson = interviewDBlink[props.contentid];   
   
    return(
      <section id={props.contentid} className="pjtsection d-flex justify-content-center align-items-center text-center ">
          {
              interviewjson.map(function(value, index){
                  //this조심할것
                  return(
                    <div className="row">
                      <div className="col-md-6">
                        <img src={value.imgsrc} className='img-fluid' alt="" />
                      </div>

                      <div className="col-md-6">
                        <h3 className='songmyung border-bottom py-2'>{value.subject}</h3>
                        <p className='py-5 px-5 white-space-prewrap border-bottom'>{value.content}</p>
                      </div>
                    </div>
                  )
              })
          }
      </section>
    )
  }

  export default Preinterview;