import React from 'react'
import './Carloan.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
    labels: ['', '' ],
    datasets: [
      {
        label: '# of Votes',
        data: [10, 90],
        backgroundColor: [
          'rgb(159, 180, 181)',
          'rgb(60, 119, 207)',
          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        
        borderWidth: 1,
      },
    ],
  };
  
function Carloan() {
    
    
  return (
    <MainLayout>
    <div class="Carloan__container">
        <div class="Carloan__left">
            <h1>Car loan calulation</h1>
            <div className="Carloan__name">
                <ul>
                    <li>
                        <h3>audi</h3>
                    </li>
                    <li>
                        <h3>BMW</h3>
                    </li>
                </ul>  
            </div>
            <h1>rate of interest:5.4</h1>
            <h1>duration:10</h1>
            <h1>Emi:10000</h1>
            <div className="Carloan__agents">
                <h1>agent name:demo</h1>
                <h1>agent phone</h1>
            </div>
            
            <h1>pie chart</h1>
            <div className="Carloan_canvas">
            <p>blue-total income</p>
            <p>grey-10% income</p>
            <Pie data={data} />;
            </div>
        </div>
        <div class="Carloan__right">
            <h1>add section</h1>
        </div>
    </div>
    </MainLayout>
  )
}

export default Carloan