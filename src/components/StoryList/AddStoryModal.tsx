import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

type Props = {
  visible: boolean;
  setVisible(value: boolean): void;
  dataSubmit(data: Inputs): void;
};

type Inputs = {
  title: string;
  description: string;
};

export default function AddStoryModal(props: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (props.visible) {
      handleShow();
    }
  }, [props.visible]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    props.dataSubmit(data);
    props.setVisible(false);
  };

  const handleClose = () => {
    setShow(false);
    props.setVisible(false);
  };

  return (
    <div>
      <Modal
        isOpen={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <ModalHeader>Add new story</ModalHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <label htmlFor="input_title" className="sr-only">
              Story title
            </label>
            {errors.title && (
              <p className="text-danger">This field is required</p>
            )}
            <input
              id="input_title"
              {...register("title", { required: true })}
              className="form-control"
              placeholder="Story title"
            />

            <label htmlFor="input_description" className="sr-only mt-2">
              Story title
            </label>
            <input
              id="input_description"
              {...register("description")}
              className="form-control"
              placeholder="Story description"
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" disabled={!!errors.title}>
              Add story
            </Button>{" "}
            <Button color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}
