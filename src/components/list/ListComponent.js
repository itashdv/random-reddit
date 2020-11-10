import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache
} from 'react-virtualized';
import { getPosts } from '../../redux/selectors';
import { loadPosts } from '../../redux/actions';
import LikeBtn from '../reusables/LikeBtn';
import DeleteBtn from '../reusables/DeleteBtn';

const StyledList = styled.ul`
  width: 100%;
  list-style-type: none;
  color: #fff;
`;

const Link = styled.a`
  color: #c1c1c1;
`;

const ListComponent = () => {
  const cache = useRef(new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 100
  }));
  const posts = useSelector(getPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);
  return (
    <StyledList>
      <div style={{ width: '90%', height: '55vh', margin: '5px auto' }}>
        <AutoSizer>
          {({ width, height }) => (
            <>
            <List
              width={ width }
              height={ height }
              rowHeight={ cache.current.rowHeight }
              deferredMeasurementCache={ cache.current }
              rowCount={ posts.length }
              rowRenderer={({ key, index, style, parent }) => {
                const post = posts[index];
                return(
                  <CellMeasurer
                    key={ key }
                    cache={ cache.current }
                    parent={ parent }
                    columnIndex={ 0 }
                    rowIndex={ index }
                  >
                    <div style={ style }>
                      <p>
                        <LikeBtn post={ post } />
                        <DeleteBtn post={ post } />
                        <Link href={ post.url } target="_blank">{ post.title }</Link>
                      </p>
                      <br />
                    </div>
                  </CellMeasurer>
                );
              }}
            />
            </>
          )}
        </AutoSizer>
      </div>
    </StyledList>
  );
};

export default ListComponent;
