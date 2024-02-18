export const mapperCategories = (filters) => {
  return filters
    .filter((filter) => filter.id === 'category')
    ?.map((filter) => {
      const reduced = filter.values?.reduce((acc: string[], category) => {
        const otherCategorie = category['path_from_root']?.map(
          (path) => path.name
        );
        acc = acc.concat(otherCategorie);
        return acc;
      }, []);
      return reduced;
    })
    .reduce((acc, nextArray) => {
      return acc.concat(nextArray);
    }, []);
};
