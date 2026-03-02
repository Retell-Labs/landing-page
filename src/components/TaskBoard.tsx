
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import TaskColumn, { Column } from './TaskColumn';
import { Task } from './TaskCard';

// Initial data for the task board
const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'To Learn',
    color: 'muted',
    tasks: [
      {
        id: 't1',
        title: 'Spanish Market Vocabulary',
        description: 'Learn common words for shopping at local markets',
        tag: { color: 'purple', label: 'Vocabulary' },
        dueDate: 'May 20',
        assignees: 2,
        progress: { completed: 3, total: 5 }
      },
      {
        id: 't2',
        title: 'Japanese Travel Phrases',
        description: 'Essential phrases for navigating airports and trains',
        tag: { color: 'accent', label: 'Phrases' },
        dueDate: 'May 22',
        assignees: 1,
        progress: { completed: 0, total: 4 }
      },
      {
        id: 't3',
        title: 'French Cooking Terms',
        description: 'Master culinary vocabulary from cooking videos',
        tag: { color: 'blue', label: 'Pronunciation' },
        dueDate: 'May 24',
        assignees: 2,
        progress: { completed: 0, total: 6 }
      },
      {
        id: 't4',
        title: 'Korean Pop Culture Slang',
        description: 'Trendy expressions from K-drama and K-pop content',
        tag: { color: 'purple', label: 'Vocabulary' },
        dueDate: 'May 25',
        assignees: 1,
        progress: { completed: 0, total: 3 }
      }
    ]
  },
  {
    id: 'in-progress',
    title: 'Learning',
    color: 'blue',
    tasks: [
      {
        id: 't5',
        title: 'Italian Restaurant Dialogue',
        description: 'Practice ordering food and making reservations',
        tag: { color: 'blue', label: 'Pronunciation' },
        dueDate: 'May 18',
        assignees: 1,
        progress: { completed: 2, total: 3 }
      },
      {
        id: 't6',
        title: 'Mandarin Street Food Tour',
        description: 'Vocabulary from popular street food video series',
        tag: { color: 'accent', label: 'Phrases' },
        dueDate: 'May 19',
        assignees: 2,
        progress: { completed: 5, total: 8 }
      },
      {
        id: 't7',
        title: 'Portuguese Beach Vocabulary',
        description: 'Words and phrases for beach and surf culture',
        tag: { color: 'purple', label: 'Vocabulary' },
        dueDate: 'May 17',
        assignees: 1,
        progress: { completed: 3, total: 4 }
      }
    ]
  },
  {
    id: 'in-review',
    title: 'Reviewing',
    color: 'amber',
    tasks: [
      {
        id: 't8',
        title: 'German Tech Vocabulary',
        description: 'Review technical terms from product review videos',
        tag: { color: 'accent', label: 'Phrases' },
        dueDate: 'May 15',
        assignees: 1,
        progress: { completed: 4, total: 5 }
      },
      {
        id: 't9',
        title: 'Spanish Directions Phrases',
        description: 'Practice giving and understanding directions',
        tag: { color: 'blue', label: 'Pronunciation' },
        dueDate: 'May 16',
        assignees: 2,
        progress: { completed: 6, total: 6 }
      },
      {
        id: 't10',
        title: 'Japanese Greetings',
        description: 'Review formal and casual greeting expressions',
        tag: { color: 'purple', label: 'Vocabulary' },
        dueDate: 'May 14',
        assignees: 1,
        progress: { completed: 12, total: 12 }
      }
    ]
  },
  {
    id: 'completed',
    title: 'Mastered',
    color: 'accent',
    tasks: [
      {
        id: 't11',
        title: 'Korean Basic Greetings',
        description: 'Common greetings and introductions mastered',
        tag: { color: 'purple', label: 'Vocabulary' },
        dueDate: 'May 10',
        assignees: 1,
        progress: { completed: 5, total: 5 }
      },
      {
        id: 't12',
        title: 'French Numbers 1-100',
        description: 'Counting and number pronunciation fully learned',
        tag: { color: 'blue', label: 'Pronunciation' },
        dueDate: 'May 9',
        assignees: 1,
        progress: { completed: 4, total: 4 }
      },
      {
        id: 't13',
        title: 'Spanish Colors & Shapes',
        description: 'All basic colors and shapes vocabulary completed',
        tag: { color: 'accent', label: 'Phrases' },
        dueDate: 'May 8',
        assignees: 2,
        progress: { completed: 7, total: 7 }
      }
    ]
  }
];

interface TaskBoardProps {
  className?: string;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ className }) => {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);
  const [dragSourceColumn, setDragSourceColumn] = useState<string | null>(null);
  const { toast } = useToast();

  const handleTaskDragStart = (e: React.DragEvent, task: Task) => {
    e.dataTransfer.setData('taskId', task.id);
    setDraggedTask(task);

    // Find source column
    const sourceColumn = columns.find(col =>
      col.tasks.some(t => t.id === task.id)
    );

    if (sourceColumn) {
      setDragSourceColumn(sourceColumn.id);
      e.dataTransfer.setData('sourceColumnId', sourceColumn.id);
    }
  };

  const handleTaskDragEnd = () => {
    setDraggedTask(null);
    setDragSourceColumn(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: React.DragEvent) => {
    // Handle drag leave logic if needed
  };

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();

    const taskId = e.dataTransfer.getData('taskId');
    const sourceColumnId = e.dataTransfer.getData('sourceColumnId');

    if (!taskId || !sourceColumnId || sourceColumnId === targetColumnId) {
      return;
    }

    // Update columns state
    const newColumns = columns.map(column => {
      // Remove task from source column
      if (column.id === sourceColumnId) {
        return {
          ...column,
          tasks: column.tasks.filter(task => task.id !== taskId)
        };
      }

      // Add task to target column
      if (column.id === targetColumnId) {
        const taskToMove = columns.find(col => col.id === sourceColumnId)?.tasks.find(task => task.id === taskId);
        if (taskToMove) {
          return {
            ...column,
            tasks: [...column.tasks, taskToMove]
          };
        }
      }

      return column;
    });

    setColumns(newColumns);

    // Show a toast notification
    const targetColumn = columns.find(col => col.id === targetColumnId);
    if (targetColumn && draggedTask) {
      toast({
        title: "Task moved",
        description: `${draggedTask.title} moved to ${targetColumn.title}`,
      });
    }
  };

  const handleStatusChange = (taskId: string, newStatus: string) => {
    // This function can be used for programmatic status changes (not used in this implementation)
  };

  return (
    <div className={`flex gap-4 overflow-x-auto pb-4 ${className}`}>
      {columns.map(column => (
        <TaskColumn
          key={column.id}
          column={column}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onTaskDragStart={handleTaskDragStart}
          onTaskDragEnd={handleTaskDragEnd}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default TaskBoard;
