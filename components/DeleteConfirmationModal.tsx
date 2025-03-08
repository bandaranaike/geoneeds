import { useState } from "react";

interface DeleteConfirmationModalProps {
    onConfirm: () => void;
    onCancel: () => void;
    isOpen: boolean;
}

export default function DeleteConfirmationModal({ onConfirm, onCancel, isOpen }: DeleteConfirmationModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
                <p className="mb-4">Are you sure you want to delete this project? This action cannot be undone.</p>
                <div className="flex justify-end">
                    <button
                        onClick={onCancel}
                        className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}