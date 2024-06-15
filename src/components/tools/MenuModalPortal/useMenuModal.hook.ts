import { useRef, useState, useCallback, useId, cloneElement, useEffect, useMemo } from 'react';

import type { ReactElement } from 'react';

type Args = {
  buttonElement: ReactElement;
  verticalPosition: 'top' | 'bottom';
  horizontalPosition: 'left' | 'right';
  verticalOffset?: number | undefined;
  horizontalOffset?: number | undefined;
};

type Position = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

export const useMenuModal = ({
  buttonElement,
  verticalPosition,
  horizontalPosition,
  verticalOffset,
  horizontalOffset,
}: Args) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const basisRef = useRef<HTMLElement>(null);
  const [basisRect, setBasisRect] = useState<DOMRect>();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);
  const modalId = useId();

  const cloneButtonElement = cloneElement(buttonElement, {
    ref: basisRef,
    'aria-controls': modalId,
    onClick: handleOpen,
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    if (basisRef.current === null) {
      return;
    }

    setBasisRect(basisRef.current.getBoundingClientRect());
  }, [isOpen]);

  const top = useMemo(
    () => (basisRect?.top || 0) + (basisRect?.height || 0) + (verticalOffset || 0),
    [basisRect?.top, basisRect?.height, verticalOffset],
  );
  const right = useMemo(
    () => document.documentElement.clientWidth - (basisRect?.right || 0) + (horizontalOffset || 0),
    [basisRect?.right, horizontalOffset],
  );
  const bottom = useMemo(
    () => document.documentElement.clientHeight - (basisRect?.top || 0) + (verticalOffset || 0),
    [basisRect?.top, verticalOffset],
  );
  const left = useMemo(() => (basisRect?.left || 0) + (horizontalOffset || 0), [basisRect?.left, horizontalOffset]);

  const position = useMemo<Position>(() => {
    const position: Position = {};

    if (modalRef.current === null) {
      return position;
    }

    switch (verticalPosition) {
      case 'top':
        if (top + modalRef.current.getBoundingClientRect().height > document.documentElement.clientHeight) {
          position.bottom = `${bottom}px`;
          break;
        }
        position.top = `${top}px`;
        break;
      case 'bottom':
        if (bottom - modalRef.current.getBoundingClientRect().height < 0) {
          position.top = `${top}px`;
          break;
        }
        position.bottom = `${bottom}px`;
        break;
    }

    // TODO: implement a function that detects horizontal position is overflow, but need to consider when sp
    switch (horizontalPosition) {
      case 'left':
        position.left = `${left}px`;
        break;
      case 'right':
        position.right = `${right}px`;
        break;
    }

    return position;
  }, [verticalPosition, horizontalPosition, top, right, bottom, left]);

  return {
    modalRef,
    modalId,
    position,
    cloneButtonElement,
    isOpen,
    handleOpen,
    handleClose,
  };
};
