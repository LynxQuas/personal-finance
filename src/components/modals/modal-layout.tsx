import type { ReactNode } from "react"

type ModalLayoutProps = {
  children: ReactNode
  onClose: () => void
}
export default function ModalLayout({ children, onClose }: ModalLayoutProps) {
  return (
    <div>
      <div
        className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-20"
        onClick={onClose}
      >
        <div className="absolute top-[50%] md:left-[50%] md:translate-x-[-50%] translate-y-[-50%] z-20">
          {children}
        </div>
      </div>
    </div>
  )
}
