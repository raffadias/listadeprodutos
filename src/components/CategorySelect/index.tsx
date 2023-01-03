import Select, { OptionsOrGroups, StylesConfig } from 'react-select';
import { SelectProps } from '../../types/Select';

interface CategorySelectProps {
    selectedCategory: SelectProps | undefined;
    setSelectedCategory: React.SetStateAction<any>;
    options: OptionsOrGroups<any,any>;
}

export function CategorySelect({selectedCategory, setSelectedCategory, options}: CategorySelectProps) {

    const customStyles: StylesConfig<SelectProps> = {
        group: (provided : any, state : any) => ({
          ...provided,
          color: state.isFocused ? '#4abd5a' : '#3F4254',
        }),
        option: (styles : any) => ({
          ...styles,
          color: '#3F4254'
        })
    }

    const theme = (theme: any) => ({
        ...theme,
        padding: 0,
        colors: {
          ...theme.colors,
          primary25: '#a5f0af',
          primary: '#4abd5a',
        },
      });


    return (
        <>
          <label>Filtrar por categoria</label>
          <Select
            placeholder="Selecione uma categoria para filtrar os produtos"
            defaultValue={selectedCategory}
            isSearchable={true}
            isClearable={true}
            onChange={(e: SelectProps) => {
              setSelectedCategory(e);
            }}
            options={options}
            styles={customStyles}
            theme={theme}
          />
        </>
    );
}