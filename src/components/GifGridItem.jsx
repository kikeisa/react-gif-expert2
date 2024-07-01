

const GifGridItem = ({url,title}) => {

  
    return (
    <div className="card">
      <img src={url} alt={title} srcset="" />
      <p>{title}</p>
    </div>
  )
}

export default GifGridItem
