/* eslint-disable no-prototype-builtins */
import _ from 'lodash'
import React, { useState } from 'react'
import classNames from 'classnames'
import Table from 'react-bootstrap/Table'
import './index.scss'

const Row = ({ items }) => _.map(items.tr, (column, idx) => (
  column.description
    ? <td key={idx + column.title}><span style={{ fontWeight: 'bold' }}>{_.get(column, 'title')}</span> <br /> {_.get(column, 'description')}</td>
    : <td key={idx + column.title}>{_.get(column, 'title')}</td>))

const rowChildren = (children, headTable) => _.map(children, (child, idx) => {
  if (!_.isEmpty(child.sub_children)) {
    return (
      <React.Fragment key={idx}>
        <tr className="trNoBorder trBold">
          {
            _.map(headTable.tr, (__, i) => <td key={i}>{i === 0 ? _.head(child.tr).title : ''}</td>)
          }
        </tr>
        {_.map(child.sub_children, (c, ix) => <tr className="trNoBorder" key={ix} ><Row items={c}/></tr>)}
      </React.Fragment>
    )
  }
  return (<tr className="trChildren" rowSpan="2"><Row items={child}/></tr>)
})

const TableProduct = ({ data }) => {
  const [headTable] = useState(_.head(data), [])
  const [bodyTable] = useState(_.drop(data))
  return (

    <Table bordered hover>
      <thead>
        <tr>
          {headTable && <Row items={headTable} />}
        </tr>
      </thead>
      <tbody>
        {_.map(bodyTable, (row, idx) => {
          if (!_.isEmpty(row.children)) {
            return (
              <React.Fragment key={idx}>
                <tr className="tbaleHeadBlue">
                  {
                    _.map(headTable.tr, (__, i) => <td key={i}>{i === 0 ? _.head(row.tr).title : ''}</td>)
                  }
                </tr>
                {rowChildren(row.children, headTable)}
              </React.Fragment>
            )
          }
          return (
            <tr key={idx}>
              {
                row && <Row items={row}/>
              }
            </tr>
          )
        })}
      </tbody>

    </Table>

  )
}

export default TableProduct
