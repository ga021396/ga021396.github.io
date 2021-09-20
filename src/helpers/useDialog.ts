import { useState } from "react";

function useDialog(initState: boolean) {
  const [isOpen, setIsOpen] = useState(initState);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen(!isOpen);

  return { isOpen, onOpen, onClose, onToggle };
}

export default useDialog;
