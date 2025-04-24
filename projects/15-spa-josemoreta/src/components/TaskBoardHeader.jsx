export function TaskBoardHeader ({ children })  {

  return (
    <section className='taskStatusHeadingsBox'>
      <p className='taskStatusHeading'>{children}</p>
    </section>
  )
}