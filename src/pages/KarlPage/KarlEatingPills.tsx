import React, { useState } from 'react';

import {
  DndContext,
  useDraggable,
  useDroppable,
  DragEndEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

import { initialPills, KARL, KARL_SIZE, PILL_SIZE } from './constants';
import { getEyeRotation } from './getEyeRotation';
import { CursorPos, Pill } from './types';
import { useDragPosition } from './useDragPosition';

import './KarlEatingPills.css';

interface OwnProps {
  onPillsConsumed: () => void;
}

export const KarlEatingPills = ({ onPillsConsumed }: OwnProps) => {
  const [pills, setPills] = useState<Pill[]>(initialPills);
  const [isKarlEating, setIsKarlEating] = useState<boolean>(false);
  const [pillBeingDragged, setPillBeingDragged] = useState<string | null>(null);
  const cursorPos = useDragPosition(pillBeingDragged);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragStart = (event: DragStartEvent) => {
    setPillBeingDragged(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setPillBeingDragged(null);

    const { delta, active, over } = event;
    const didFeedKarl = over?.id === KARL;

    setPills((prev) => {
      return prev.map((pill) => {
        if (pill.id === active.id) {
          const newTop = pill.top + delta.y;
          const newLeft = pill.left + delta.x;

          return {
            ...pill,
            top: Math.max(0, Math.min(window.innerHeight - PILL_SIZE, newTop)),
            left: Math.max(0, Math.min(window.innerWidth - PILL_SIZE, newLeft)),
            consumed: didFeedKarl ? true : pill.consumed,
          };
        }
        return pill;
      });
    });

    if (didFeedKarl) {
      setIsKarlEating(true);
      setTimeout(() => setIsKarlEating(false), 600);

      setTimeout(() => {
        if (pills.every((p) => p.id === active.id || p.consumed)) {
          onPillsConsumed();
        }
      }, 650);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div id="drag-field">
        <Karl
          isDragging={!!pillBeingDragged}
          isKarlEating={isKarlEating}
          cursorPos={cursorPos}
        />
        {pills.filter((p) => !p.consumed).map((pill) => (
          <DraggablePill
            key={pill.id}
            id={pill.id}
            top={pill.top}
            left={pill.left}
            isDragging={pillBeingDragged === pill.id}
          />
        ))}
      </div>
    </DndContext>
  );
};

interface DraggablePillProps {
  id: string;
  top: number;
  left: number;
  isDragging: boolean;
}

const DraggablePill = ({ id, top, left, isDragging }: DraggablePillProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const dragX = transform?.x ?? 0;
  const dragY = transform?.y ?? 0;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="pill-container"
      style={{
        top: top + dragY,
        left: left + dragX,
        width: PILL_SIZE,
        height: PILL_SIZE,
        transition: isDragging ? 'none' : 'top 0.1s, left 0.1s',
      }}
    >
      <div className="pill" />
    </div>
  );
};

interface KarlProps {
  isDragging: boolean;
  isKarlEating: boolean;
  cursorPos: CursorPos;
}

const Karl = ({ isDragging, isKarlEating, cursorPos }: KarlProps) => {
  const { setNodeRef } = useDroppable({ id: KARL });

  const leftEyeRef = React.useRef<HTMLImageElement>(null);
  const rightEyeRef = React.useRef<HTMLImageElement>(null);

  return (
    <div
      ref={setNodeRef}
      className="karl-container"
      style={{
        width: KARL_SIZE,
        height: KARL_SIZE,
      }}
    >
      <div className={`karl-top ${isKarlEating ? 'animate-mouth-top' : ''}`}>
        {isDragging && (
          <>
            <img
              ref={leftEyeRef}
              src="/img/eye.png"
              className="eye left"
              alt="eye left"
              style={{ transform: `rotate(${getEyeRotation(leftEyeRef.current, cursorPos)}deg)` }}
            />
            <img
              ref={rightEyeRef}
              src="/img/eye.png"
              className="eye right"
              alt="eye right"
              style={{ transform: `rotate(${getEyeRotation(rightEyeRef.current, cursorPos)}deg)` }}
            />
          </>
        )}
      </div>
      <div className={`karl-bottom ${isKarlEating ? 'animate-mouth-bottom' : ''}`} />
    </div>
  );
};
