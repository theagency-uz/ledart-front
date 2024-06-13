'use client';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import RadioIcon from './radioIcon';

import classes from './styles.module.css';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  BrandInterface,
  CategoryInterface,
  FilterInterface,
} from '@/types/interfaces';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function FilterCards({
  lng,
  setFilter,
  filter,
  categories,
  products,
  category,
  brands,
}: {
  lng: string;
  setFilter: Dispatch<SetStateAction<FilterInterface>>;
  filter: FilterInterface;
  categories: CategoryInterface[];
  products: any;
  category: CategoryInterface;
  brands: BrandInterface[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log(searchParams.get('categorySlug'));

  const [types, setTypes] = useState<BrandInterface[]>();

  useEffect(() => {
    (async () => {
      // setTypes(types);
    })();
  }, []);

  const toggleArrayValue = (key: keyof FilterInterface, value: number) => {
    setFilter((prevFilter) => {
      let updatedArray = [...(prevFilter[key] as number[])];

      if (updatedArray.includes(value)) {
        updatedArray = updatedArray.filter((item) => item !== value);
      } else {
        updatedArray.push(value);
      }

      const uniqueSortedArray = Array.from(new Set(updatedArray)).sort(
        (a, b) => a - b
      );

      return {
        ...prevFilter,
        [key]: uniqueSortedArray,
      };
    });
  };

  const handleToggleChange =
    (key: keyof FilterInterface) =>
    (event: React.MouseEvent<HTMLElement>, newAlignment: number) => {
      toggleArrayValue(key, newAlignment);
    };
  const handleChangeCategory = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    router.push(`?categorySlug=${value}`);
  };

  return (
    <div>
      <p>Filter</p>
      <ToggleButtonGroup
        className={classes.filter}
        onChange={handleChangeCategory}
        // value={filter.brands}
        exclusive
      >
        <p>Категории</p>
        {categories && categories.length
          ? categories.map(({ id, attributes }) => {
              const { name, slug } = attributes;
              return (
                <ToggleButton
                  key={id}
                  value={slug}
                  aria-label='bold'
                  disableRipple={true}
                  className={classes.filter_btn}
                >
                  <RadioIcon selected={'' === slug} />

                  {name}
                </ToggleButton>
              );
            })
          : null}
      </ToggleButtonGroup>
      {/* <ToggleButtonGroup
                className={classes.filter}
                onChange={handleToggleChange("types")}
                value={filter.types}
                exclusive
            >
                <p>Тип</p>
                {types && types.length ?
                    (
                        types.map(({ id, attributes }) => {
                            const { name } = attributes
                            return (
                                <ToggleButton
                                    value={id}
                                    aria-label='bold'
                                    disableRipple={true}
                                    className={classes.filter_btn}
                                >
                                    <RadioIcon
                                        selected={filter.types.includes(id)}
                                    />

                                    {name}
                                </ToggleButton>
                            )
                        })
                    )
                    : null}

            </ToggleButtonGroup> */}

      <ToggleButtonGroup
        className={classes.filter}
        onChange={handleToggleChange('brands')}
        value={filter.brands}
        exclusive
      >
        <p>Бренд</p>
        {brands && brands.length
          ? brands.map(({ id, attributes }) => {
              const { name } = attributes;
              return (
                <ToggleButton
                  key={id}
                  value={id}
                  aria-label='bold'
                  disableRipple={true}
                  className={classes.filter_btn}
                >
                  <RadioIcon selected={filter.brands.includes(id)} />

                  {name}
                </ToggleButton>
              );
            })
          : null}
      </ToggleButtonGroup>
    </div>
  );
}
