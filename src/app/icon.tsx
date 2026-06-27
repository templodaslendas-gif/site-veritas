import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#111111',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            background: '#C4803E',
            transform: 'rotate(45deg)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
