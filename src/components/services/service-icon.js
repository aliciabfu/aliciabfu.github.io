import React from "react"
import {
  FaSearch,
  FaChartLine,
  FaShareAlt,
  FaChartBar,
  FaBolt,
  FaBullseye,
} from "react-icons/fa"

const iconMap = {
  search: FaSearch,
  trending: FaChartLine,
  share: FaShareAlt,
  chart: FaChartBar,
  zap: FaBolt,
  target: FaBullseye,
}

const ServiceIcon = ({ icon, className }) => {
  const Icon = iconMap[icon]
  return Icon ? <Icon className={className} /> : null
}

export default ServiceIcon
