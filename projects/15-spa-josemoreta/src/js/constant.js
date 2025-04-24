export const TASK_STATUS={
  new: 0,
  inProgress:1,
  complete:2
} 

export const TODOS = [
  {
    id: 1,
    description: 'Leer el Manual de React',
    status: TASK_STATUS.new,
    createdAt: '23-04-2025',
    updatedAt: '24-04-2025'
  },
  {
    id: 2,
    description: 'Crear los Componentes de la APP',
    status: TASK_STATUS.inProgress,
    createdAt: '23-04-2025',
    updatedAt: '24-04-2025'
  },
  {
    id: 3,
    description: 'Hacer la APP Interactiva',
    status: TASK_STATUS.complete,
    createdAt: '23-04-2025',
    updatedAt: '24-04-2025'
  }
]
