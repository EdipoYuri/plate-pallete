declare global{
  type CardInfos = {
    idMeal: string,
    imgLink: string,
    title: string
  }

  type DropdownParams = {
    apiFilter: string,
    onChange: any
  }
}

export {}