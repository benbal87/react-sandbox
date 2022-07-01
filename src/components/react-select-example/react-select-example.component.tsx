import React, { useState } from 'react'
import ReactSelect, {
  ActionMeta,
  InputActionMeta,
  MultiValue,
  Theme
} from 'react-select'
import CreatableSelect from 'react-select/creatable'
import style from './react-select-example.module.scss'
import { ReactSelectOption } from './react-select-example.types'
import { groceriesOptions } from './react-select-example.constants'

function ReactSelectExample() {
  const [groceries, setGroceries] = useState<ReactSelectOption[]>([])
  const [creatableGroceries, setCreatableGroceries] = useState<
    ReactSelectOption[]
  >([])

  const handleGroceriesSelectionChange = (
    newValue: MultiValue<ReactSelectOption>,
    actionMeta: ActionMeta<ReactSelectOption>
  ) => {
    console.group('Groceries Value Changed')
    console.log('newValue:', newValue)
    console.log('action:', actionMeta.action)
    console.log('actionMeta', actionMeta)
    console.groupEnd()
    setGroceries(newValue as ReactSelectOption[])
  }

  const handleChangeOnCreatable = (
    newValue: MultiValue<ReactSelectOption>,
    actionMeta: ActionMeta<ReactSelectOption>
  ) => {
    console.group('Creatable Select Value Changed')
    console.log('newValue:', newValue)
    console.log('action:', actionMeta.action)
    console.log('actionMeta', actionMeta)
    console.groupEnd()
    setCreatableGroceries(newValue as ReactSelectOption[])
  }

  const handleInputChangeOnCreatable = (
    inputValue: any,
    actionMeta: InputActionMeta
  ) => {
    console.group('Creatable Select Input Changed')
    console.log('inputValue', inputValue)
    console.log('action:', actionMeta.action)
    console.log('actionMeta', actionMeta)
    console.groupEnd()
  }

  return (
    <div className={style.container}>
      <h1>React Select Tryout</h1>
      <div className={style.select_inputs_container}>
        <div className={style.select_container}>
          <div className={style.title}>
            <span>React Select</span>
            <span>custom style</span>
          </div>

          <ReactSelect
            value={groceries}
            defaultValue={[groceriesOptions[2], groceriesOptions[12]]}
            options={groceriesOptions}
            placeholder={'Select from groceries...'}
            theme={(theme: Theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: 'hotpink',
                primary: 'black'
              }
            })}
          />
        </div>

        <div className={style.select_container}>
          <div className={style.title}>
            <span>ReactSelect</span>
            <span>isMulti, autoFocus, isSearchable</span>
          </div>

          <ReactSelect
            value={groceries}
            defaultValue={[groceriesOptions[2], groceriesOptions[12]]}
            options={groceriesOptions}
            placeholder={'Select from groceries...'}
            noOptionsMessage={() => 'No other groceries... :('}
            onChange={handleGroceriesSelectionChange}
            isMulti
            autoFocus
            isSearchable
          />

          {groceries?.length > 0 && (
            <div className={style.results}>
              {groceries.map((g: ReactSelectOption) => (
                <span key={`${g.value}_${g.label}`}>{g.label}</span>
              ))}
            </div>
          )}
        </div>

        <div className={style.select_container}>
          <div className={style.title}>CreatableSelect</div>

          <CreatableSelect
            value={creatableGroceries}
            defaultValue={[groceriesOptions[2], groceriesOptions[12]]}
            isClearable
            isMulti
            onChange={handleChangeOnCreatable}
            onInputChange={handleInputChangeOnCreatable}
          />

          {creatableGroceries?.length > 0 && (
            <div className={style.results}>
              {creatableGroceries.map((g: ReactSelectOption) => (
                <span key={`${g.value}_${g.label}`}>{g.label}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReactSelectExample
