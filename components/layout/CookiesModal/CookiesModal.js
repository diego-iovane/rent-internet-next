import {
    ModalContainer,
    Modal,
    Text,
    Button,
} from './Elements'

const CookiesModal = ({setModal}) => {
  return (
    <ModalContainer>
        <Modal>
            <Text>Al hacer click en <span style={{fontWeight: 'bold'}}>Aceptar</span> acepta el uso de cookies esenciales para que nuestro sitio web funcione adecuadamente.</Text>
            <Button onClick={() => setModal(false)}>Aceptar</Button>
        </Modal>
    </ModalContainer>
  )
}

export default CookiesModal