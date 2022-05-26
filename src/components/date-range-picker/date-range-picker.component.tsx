import {
  addDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfWeek,
  endOfWeek,
  isSameDay
} from 'date-fns'
import React, { useState } from 'react'
import style from './date-range-picker.module.scss'
import {
  DateRangePicker,
  DefinedRangeProps,
  Range,
  RangeKeyDict,
  StaticRange
} from 'react-date-range'
import ClickAwayListener from 'react-click-away-listener'
import { isNil } from 'lodash'
import moment from 'moment'

const defineds = {
  startOfWeek: startOfWeek(new Date()),
  endOfWeek: endOfWeek(new Date()),
  startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
  endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
  startOfToday: startOfDay(new Date()),
  endOfToday: endOfDay(new Date()),
  startOfYesterday: startOfDay(addDays(new Date(), -1)),
  endOfYesterday: endOfDay(addDays(new Date(), -1)),
  startOfMonth: startOfMonth(new Date()),
  endOfMonth: endOfMonth(new Date()),
  startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
  endOfLastMonth: endOfMonth(addMonths(new Date(), -1))
}

const staticRangeHandler: StaticRange = {
  range: (props?: DefinedRangeProps): Range => ({
    startDate: new Date(),
    endDate: new Date()
  }),
  isSelected(range: Range) {
    const definedRange: Range = this.range()
    return (
      !isNil(range.startDate) &&
      !isNil(range.endDate) &&
      !isNil(definedRange.startDate) &&
      !isNil(definedRange.endDate) &&
      isSameDay(range.startDate, definedRange.startDate) &&
      isSameDay(range.endDate, definedRange.endDate)
    )
  }
}

export function createStaticRanges(
  ranges: Array<Partial<StaticRange>>
): StaticRange[] {
  return ranges.map(
    range => ({ ...staticRangeHandler, ...range } as StaticRange)
  )
}

export const DEFAULT_STATIC_RANGES: Array<Partial<StaticRange>> = [
  {
    label: 'Today',
    range: (props?: DefinedRangeProps): Range => ({
      startDate: moment().startOf('day').toDate(),
      endDate: moment().endOf('day').toDate()
    })
  },
  {
    label: 'Yesterday',
    range: (props?: DefinedRangeProps): Range => ({
      startDate: defineds.startOfYesterday,
      endDate: defineds.endOfYesterday
    })
  },

  {
    label: 'This Week',
    range: (props?: DefinedRangeProps): Range => ({
      startDate: defineds.startOfWeek,
      endDate: defineds.endOfWeek
    })
  },
  {
    label: 'Last Week',
    range: (props?: DefinedRangeProps): Range => ({
      startDate: defineds.startOfLastWeek,
      endDate: defineds.endOfLastWeek
    })
  },
  {
    label: 'This Month',
    range: (props?: DefinedRangeProps): Range => ({
      startDate: defineds.startOfMonth,
      endDate: defineds.endOfMonth
    })
  },
  {
    label: 'Last Month',
    range: (props?: DefinedRangeProps): Range => ({
      startDate: defineds.startOfLastMonth,
      endDate: defineds.endOfLastMonth
    })
  }
]

export const defaultStaticRanges: StaticRange[] = createStaticRanges(
  DEFAULT_STATIC_RANGES
)

class StaticRangeLabelContent extends React.Component<{ text: string }> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    let { text } = this.props
    console.log('StaticRangeLabelContent', text)
    return <button className={style.static_range_label_content}>{text}</button>
  }
}

const renderStaticRangeLabel = () => {
  console.log('renderStaticRangeLabel')
  return <StaticRangeLabelContent text={'Testing custom label'} />
}

function DateRangePickerComponent() {
  const [state, setState] = useState<Array<Range>>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ])

  const [isDateRangePickerVisible, setIsDateRangePickerVisible] =
    useState<boolean>(false)

  const toggleIsDateRangePickerVisible = () => {
    setIsDateRangePickerVisible(prevState => !prevState)
  }

  return (
    <div className={style.container}>
      <ClickAwayListener
        onClickAway={() => {
          if (isDateRangePickerVisible) {
            setIsDateRangePickerVisible(false)
          }
        }}>
        <div className={style.date_filter_container}>
          <button
            className={style.trigger_btn}
            onClick={toggleIsDateRangePickerVisible}>
            Date Range Picker
          </button>
          {isDateRangePickerVisible && (
            <div className={style.date_range_picker_aaa}>
              <DateRangePicker
                onChange={(range: RangeKeyDict) => setState([range.selection])}
                // className={style.date_range_picker}
                renderStaticRangeLabel={renderStaticRangeLabel}
                staticRanges={defaultStaticRanges}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                direction='horizontal'
              />
              <button className={style.apply_btn}>Apply</button>
            </div>
          )}
        </div>
      </ClickAwayListener>
    </div>
  )
}

export default DateRangePickerComponent
