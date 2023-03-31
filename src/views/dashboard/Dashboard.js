import React, { useEffect, useRef, useState } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartBar, CChartLine, CChartScatter } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cibKaggle,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import axios from 'axios'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

import '../../scss/_custom.scss'

const Dashboard = () => {
  // const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  // const progressExample = [
  //   { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
  //   { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
  //   { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
  //   { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
  //   { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  // ]

  // const progressGroupExample1 = [
  //   { title: 'Monday', value1: 34, value2: 78 },
  //   { title: 'Tuesday', value1: 56, value2: 94 },
  //   { title: 'Wednesday', value1: 12, value2: 67 },
  //   { title: 'Thursday', value1: 43, value2: 91 },
  //   { title: 'Friday', value1: 22, value2: 73 },
  //   { title: 'Saturday', value1: 53, value2: 82 },
  //   { title: 'Sunday', value1: 9, value2: 69 },
  // ]

  // const progressGroupExample2 = [
  //   { title: 'Male', icon: cilUser, value: 53 },
  //   { title: 'Female', icon: cilUserFemale, value: 43 },
  // ]

  // const progressGroupExample3 = [
  //   { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
  //   { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
  //   { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
  //   { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  // ]

  // const tableExample = [
  //   {
  //     avatar: { src: avatar1, status: 'success' },
  //     user: {
  //       name: 'Yiorgos Avraamu',
  //       new: true,
  //       registered: 'Jan 1, 2021',
  //     },
  //     country: { name: 'USA', flag: cifUs },
  //     usage: {
  //       value: 50,
  //       period: 'Jun 11, 2021 - Jul 10, 2021',
  //       color: 'success',
  //     },
  //     payment: { name: 'Mastercard', icon: cibCcMastercard },
  //     activity: '10 sec ago',
  //   },
  //   {
  //     avatar: { src: avatar2, status: 'danger' },
  //     user: {
  //       name: 'Avram Tarasios',
  //       new: false,
  //       registered: 'Jan 1, 2021',
  //     },
  //     country: { name: 'Brazil', flag: cifBr },
  //     usage: {
  //       value: 22,
  //       period: 'Jun 11, 2021 - Jul 10, 2021',
  //       color: 'info',
  //     },
  //     payment: { name: 'Visa', icon: cibCcVisa },
  //     activity: '5 minutes ago',
  //   },
  //   {
  //     avatar: { src: avatar3, status: 'warning' },
  //     user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
  //     country: { name: 'India', flag: cifIn },
  //     usage: {
  //       value: 74,
  //       period: 'Jun 11, 2021 - Jul 10, 2021',
  //       color: 'warning',
  //     },
  //     payment: { name: 'Stripe', icon: cibCcStripe },
  //     activity: '1 hour ago',
  //   },
  //   {
  //     avatar: { src: avatar4, status: 'secondary' },
  //     user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
  //     country: { name: 'France', flag: cifFr },
  //     usage: {
  //       value: 98,
  //       period: 'Jun 11, 2021 - Jul 10, 2021',
  //       color: 'danger',
  //     },
  //     payment: { name: 'PayPal', icon: cibCcPaypal },
  //     activity: 'Last month',
  //   },
  //   {
  //     avatar: { src: avatar5, status: 'success' },
  //     user: {
  //       name: 'Agapetus Tadeáš',
  //       new: true,
  //       registered: 'Jan 1, 2021',
  //     },
  //     country: { name: 'Spain', flag: cifEs },
  //     usage: {
  //       value: 22,
  //       period: 'Jun 11, 2021 - Jul 10, 2021',
  //       color: 'primary',
  //     },
  //     payment: { name: 'Google Wallet', icon: cibCcApplePay },
  //     activity: 'Last week',
  //   },
  //   {
  //     avatar: { src: avatar6, status: 'danger' },
  //     user: {
  //       name: 'Friderik Dávid',
  //       new: true,
  //       registered: 'Jan 1, 2021',
  //     },
  //     country: { name: 'Poland', flag: cifPl },
  //     usage: {
  //       value: 43,
  //       period: 'Jun 11, 2021 - Jul 10, 2021',
  //       color: 'success',
  //     },
  //     payment: { name: 'Amex', icon: cibCcAmex },
  //     activity: 'Last week',
  //   },
  // ]

  const [salesData, setSalesData] = useState({})
  const [saleTime, setSaleTime] = useState(7)
  const [topOwners, setTopOwners] = useState([])
  const [ownerDistribution, setOwnerDistribution] = useState({})

  const getSalesData = () => {
    axios
      .get(`http://localhost:5000/getSales?time=${saleTime}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        let temp = res.data.data.allData

        temp = temp.map((item) => ({
          x: item.timestamp,
          y: item.price.amount.decimal,
        }))

        setSalesData({
          datasets: [
            {
              label: 'Sales',
              fill: true,
              backgroundColor: 'rgba(75,192,192,0.4)',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 10,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 10,
              data: temp,
              backgroundColor: ['rgba(75,192,192,0.6)'],
              borderWidth: 4,
              responsive: true,
            },
          ],
        })
      })
      .catch((error) => {
        console.log('error.message :>> ', error.message)
      })
  }

  const getTopOwnersData = () => {
    axios
      .get(`http://localhost:5000/getTopOwners`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setTopOwners(res.data.data)
        console.log('res.data :>> ', res.data)
      })
      .catch((error) => {
        console.log('error.message :>> ', error.message)
      })
  }
  const getOwnerDistributionData = () => {
    axios
      .get(`http://localhost:5000/getOwners`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setOwnerDistribution(res.data.data)
      })
      .catch((error) => {
        console.log('error.message :>> ', error.message)
      })
  }

  useEffect(() => {
    getSalesData()
    getTopOwnersData()
    getOwnerDistributionData()
  }, [saleTime])

  const tableRef = useRef()

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.parentElement.style.height = '250px'
    }
    return () => {}
  }, [tableRef])

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                NFT Sales
              </h4>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButtonGroup className="float-end me-3">
                {[7, 30, 90].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 7}
                    onClick={() => setSaleTime(value)}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartScatter
            style={{ height: 'fit-content', marginTop: '30px' }}
            data={salesData}
            options={{
              scales: {
                x: {
                  ticks: {
                    callback: function (label) {
                      return `${new Date(label * 1000).toDateString()}`
                    },
                  },
                },
              },
            }}
          />
        </CCardBody>
      </CCard>

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Top Owners</CCardHeader>
            <CCardBody style={{ height: '300px' }}>
              <CTable
                align="middle"
                className="mb-0 border CTable-class"
                hover
                ref={tableRef}
                responsive
              >
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell>Wallet</CTableHeaderCell>
                    <CTableHeaderCell>Owned</CTableHeaderCell>
                    <CTableHeaderCell>%Owned</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {topOwners.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <span>{index + 1}</span>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.address}</div>
                      </CTableDataCell>

                      <CTableDataCell>
                        <div>{item.ownership.tokenCount}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.ownership.tokenCount / 100}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Owner Distribution</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: [
                  '1 item',
                  '2-3 items',
                  '4-10 items',
                  '11-25 items',
                  '26-50 items',
                  '51+ items',
                ],
                datasets: [
                  {
                    backgroundColor: '#f87979',

                    data: [
                      ownerDistribution.oneItem,
                      ownerDistribution.secondThirdItem,
                      ownerDistribution.fourTenthItem,
                      ownerDistribution.elevenTwentyFifthItem,
                      ownerDistribution.twentySixFiftyItem,
                      ownerDistribution.fiftyOnePlusItem,
                    ],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default Dashboard
