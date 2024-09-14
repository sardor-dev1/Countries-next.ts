// src/components/LikedModal.tsx
"use client"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';
import { Modal } from '@mui/material';

const LikedModal = ({ open, onClose }) => {
  const likedCountries = useSelector((state: RootState) => state.likes.likedCountries);

  return (
    <Modal open={open} onClose={onClose}>
      <div className="modal-content">
        <h2>Liked Countries</h2>
        <ul>
          {likedCountries.map((country) => (
            <li key={country}>{country}</li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default LikedModal;
