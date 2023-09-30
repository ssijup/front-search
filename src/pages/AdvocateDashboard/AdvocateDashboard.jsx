import React,{useEffect, useState} from 'react'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../../components/netmagicsdashboard/dashboard-wrapper/DashboardWrapper'
import axiosInstance from '../../configs/axios/AxiosVonfiguration'







// import {data} from '../../constants'
// import Box from '../../components/netmagicsdashboard/Box/Box'
// import SummaryBox, { SummaryBoxSpecial } from '../../components/netmagicsdashboard/summarybox/SummaryBox'
// import {colors} from '../../constants'
// import { Bar } from 'react-chartjs-2'


// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js'
// import OverallList from '../../components/netmagicsdashboard/overall-list/OverallList'
// import RevenueList from '../../components/netmagicsdashboard/revenue-list/RevenueList'

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// )


function Dashboard() {
 const [advocate,setAdvocate]=useState([])
 const token=localStorage.getItem('advocateToken')
  useEffect(()=>{
    axiosInstance.get('/advocates/profile',{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    }).then((response)=>{
           setAdvocate(response.data)
           localStorage.setItem('advocateData',response.data.id)
    })
  },[])

  return (
    <div>
     <DashboardWrapper>
      <DashboardWrapperMain>
       
       <div className="row">
        <div className="col-12">
        <section style={{ backgroundColor: '#eee' }}>
      <div className="container py-5">
        {/* <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">User</a></li>
                <li className="breadcrumb-item active" aria-current="page">User Profile</li>
              </ol>
            </nav>
          </div>
        </div> */}

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src={advocate?.profile_image_url} alt="avatar"
                  className="rounded-circle img-fluid" style={{ width: '150px' }} />
                <h5 className="my-3">{advocate?.user?.name}</h5>
                <p className="text-muted mb-1">{advocate?.user?.email}</p>
                <p className="text-muted mb-4">{advocate.phone}</p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-primary">EditProfile</button>
                  {/* <button type="button" className="btn btn-outline-primary ms-1">MakePayment</button> */}
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0">https://khcaa.com</p>                             
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-github fa-lg" style={{ color: '#333333' }}></i>
                    <p className="mb-0">khcaa</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }}></i>
                    <p className="mb-0"></p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{advocate?.user?.name}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{advocate?.user?.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{advocate.phone}</p>
                  </div>
                </div>
                <hr />
                {/* <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(098) 765-4321</p>
                  </div>
                </div> */}
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{advocate.address}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">{advocate.specialization}</span> lawyer</p>
                    <p className="mb-1" style={{ fontSize: '.77rem' }}>{advocate.specialization}</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>www.khcaa.com</p>
                    {/* <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                    <div className="progress rounded mb-2" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</p>
                    <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                    <div className="progress rounded mb-2" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
                   
        </div>
       </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        {/* <div className="title mb">overall</div>
        <div className="mb">
          <OverallList/>
        </div>
        <div className="title mb">Revenue by channel</div>
        <div className="mb">
          <RevenueList/>
        </div> */}
        
      </DashboardWrapperRight>
     </DashboardWrapper>
    </div>
  )
}

export default Dashboard


// const RevenueByMonthsChart = () => {
//   const chartOptions={
//     responsive:true,
//     maintainAspectRatio:false,
//     scales: {
//       xAxes:{
//         grid:{
//           display:false,
//           drawBorder:false
//         }
//       },
//       yAxes:{
//         grid:{
//           display:false,
//           drawBorder:false
//         }
//       }
//     },
//     plugins:{
//       legend:{
//         display:false
//       },
//       title:{
//         display:false
//       }
//     },
//     elements:{
//       bar:{
//         backgroundColor:colors.orange,
//         borderRadius:20,
//         borderSkipped:'bottom'
//       }
//     }
//   }

//   const chartData={
//     labels:data.revenueByMonths.labels,
//     datasets:[
//       {
//         label:'remove',
//         data:data.revenueByMonths.data
//       }
//     ]
//   }
//   return (
//     <>
//     <div className="title mb">

//     </div>
//     <div>
//            <Bar options={chartOptions} data={chartData} height={`300px`}/>
//     </div>
//     </>
//   )
// }