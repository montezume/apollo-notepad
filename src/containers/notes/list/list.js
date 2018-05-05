import React from 'react';

import Item from './item';

const List = ({items}) => {
  return items && items.map(item => <Item key={item.id} item={item} />);
};

export default List;
