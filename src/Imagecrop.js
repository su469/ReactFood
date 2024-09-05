import React,{useState} from 'react';
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

const Imagecrop = () => {
    const [src, setSrc] = useState(null)
    const [crop, setCrop] = useState({ aspect: 16 / 9 })
    const [image, setImage] = useState(null)
    const [output, setOutput] = useState(null)
    const selectImage = (file) => {
      setSrc(URL.createObjectURL(file))
    }
    const onImageLoaded = (image)=>{
    }
    const cropImageNow = () => {
      const canvas = document.createElement('canvas')
  
      const ctx = canvas.getContext('2d')
  
      const pixelRatio = window.devicePixelRatio
      canvas.width = crop.width * pixelRatio
      canvas.height = crop.height * pixelRatio
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      ctx.imageSmoothingQuality = 'high'
  
      const img = document.createElement('img')
      img.src = 'path/to/image.jpg'
      img.onload = function () {
        ctx.drawImage(img, 0, 0,canvas.width,canvas.height)
      }
      // Converting to base64
      const base64Image = canvas.toDataURL('image/jpeg')
      setOutput(base64Image)
    }
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => selectImage(e?.target?.files[0])}
      />
      <div>
        {src && (
          <div>
            <ReactCrop
              src={src}
              onImageLoaded={onImageLoaded}
              crop={crop}
              onChange={setCrop}
            >
              {' '}
              <img src={src} style={{ width: '300px', height: '300px' }} />
            </ReactCrop>

            <br />
            <button onClick={cropImageNow}>Crop</button>
            <br />
            <br />
          </div>
        )}
        <div>{output && <img src={output} />}</div>
      </div>
    </div>
  
  )
}

export default Imagecrop