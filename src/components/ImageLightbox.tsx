import { useEffect } from 'react';
import { HiX } from 'react-icons/hi';

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageLightbox = ({ src, alt, onClose }: ImageLightboxProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="image-lightbox-close"
        onClick={onClose}
        aria-label="Close"
      >
        <HiX size={22} />
      </button>
      <img
        src={src}
        alt={alt}
        className="image-lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
      <p className="image-lightbox-caption">{alt}</p>
    </div>
  );
};

export default ImageLightbox;
