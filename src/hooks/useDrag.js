import { useEffect, useRef } from 'react';

export const useDrag = () => {
  const dragRef = useRef();
  useEffect(() => {
    let startX;
    let scrollLeft;

    const onDragStart = (e) => {
      startX = e.clientX;
      scrollLeft = dragRef.current.scrollLeft;
      dragRef.current.style.cursor = 'grab'
    };

    const onDrag = (e) => {
      const distance = startX - e.clientX;
      dragRef.current.scrollLeft = scrollLeft + distance;
    };

    const onDragEnd = (e) => {
      const distance = startX - e.clientX;
      dragRef.current.scrollLeft = scrollLeft + distance;
      startX = null;
      dragRef.current.style.cursor = 'default'
    };

    dragRef.current.addEventListener('dragstart', onDragStart);
    dragRef.current.addEventListener('drag', onDrag);
    dragRef.current.addEventListener('dragend', onDragEnd);

    return () => {
      dragRef.current.removeEventListener('dragstart', onDragStart);
      dragRef.current.removeEventListener('drag', onDrag);
      dragRef.current.removeEventListener('dragend', onDragEnd);
    };
  }, []);
  return dragRef;
};
