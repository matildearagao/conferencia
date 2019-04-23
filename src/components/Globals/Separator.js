import React from 'react'

export default function Separator({styleClass}) {
  return (
    <div>
        <section className={`separator ${styleClass}`}> </section>
    </div>
  )
}

Separator.defaultProps = {
    styleClass: "separator--home"
  }