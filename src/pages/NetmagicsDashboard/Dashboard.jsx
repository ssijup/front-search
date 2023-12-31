import React from 'react'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../../components/netmagicsdashboard/dashboard-wrapper/DashboardWrapper'
import {data} from '../../constants'
import Box from '../../components/netmagicsdashboard/Box/Box'
import SummaryBox, { SummaryBoxSpecial } from '../../components/netmagicsdashboard/summarybox/SummaryBox'
import {colors} from '../../constants'
import { Bar } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import OverallList from '../../components/netmagicsdashboard/overall-list/OverallList'
import RevenueList from '../../components/netmagicsdashboard/revenue-list/RevenueList'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)


function Dashboard() {


  




  return (
    <div>
     <DashboardWrapper>
      <DashboardWrapperMain>
       <div className="row">
        <div className="col-8 col-md-12">
          <div className="row">
            {
              data.summary.map((item,index)=>(
                <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                 
                  <SummaryBox item={item}/>
                </div>
              ))
            }
          </div>
        </div>
        <div className="col-4 hide-md">
          <SummaryBoxSpecial item={data.revenueSummary} />
        </div>
       </div>
       <div className="row">
        <div className="col-12">
                   <Box>
   <RevenueByMonthsChart/>
                   </Box>
        </div>
       </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        <div className="title mb">overall</div>
        <div className="mb">
          <OverallList/>
        </div>
        <div className="title mb">Revenue by channel</div>
        <div className="mb">
          <RevenueList/>
        </div>
      </DashboardWrapperRight>
     </DashboardWrapper>
    </div>
  )
}

export default Dashboard


const RevenueByMonthsChart = () => {
  const chartOptions={
    responsive:true,
    maintainAspectRatio:false,
    scales: {
      xAxes:{
        grid:{
          display:false,
          drawBorder:false
        }
      },
      yAxes:{
        grid:{
          display:false,
          drawBorder:false
        }
      }
    },
    plugins:{
      legend:{
        display:false
      },
      title:{
        display:false
      }
    },
    elements:{
      bar:{
        backgroundColor:colors.orange,
        borderRadius:20,
        borderSkipped:'bottom'
      }
    }
  }

  const chartData={
    labels:data.revenueByMonths.labels,
    datasets:[
      {
        label:'remove',
        data:data.revenueByMonths.data
      }
    ]
  }
  return (
    <>
    <div className="title mb">

    </div>
    <div>
           <Bar options={chartOptions} data={chartData} height={`300px`}/>
    </div>
    </>
  )
}