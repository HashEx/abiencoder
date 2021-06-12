import React, { useState } from 'react';
import requestAuditService from '../../services/requestAuditService';
import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';

import Popup from '../Popup';

interface RequestAuditPopupProps {
    onClose: () => void;
}

const useForm = () => {
    const [form, setForm] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const onChange = (e: any) => {
        setForm((prevState: any) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }
    const onSubmit = async () => {
        setLoading(true);
        try {
            await requestAuditService.requestAudit({
                email: form.email,
                code: form.code,
                comment: form.comment,
            })
            setForm({
                email: "",
                code: "",
                comment: ""
            })
            setSubmitted(true);
            
        } catch(e) {
            console.error(e)
        }
        setLoading(false);
    }

    return {
        form,
        loading,
        onSubmit,
        onChange,
        submitted
    }
}

const RequestAuditPopup: React.FC<RequestAuditPopupProps> = ({onClose}) => {
    const { form, loading, submitted, onChange, onSubmit } = useForm();
    const disabledSubmit = !form.email || !form.code;
    if(submitted){
        return (
            <Popup onClose={onClose}>
                <Popup.Title>Your Audit Request accepted! Our manager will contact you during the day!</Popup.Title>
                <div className="text-center">
                    <Button onClick={onClose} hover>
                        OK
                    </Button>
                </div>
            </Popup>
        )
    }
    return (
        <Popup onClose={onClose}>
            <Popup.Title>Request Audit by HashEx</Popup.Title>
            <FormGroup label="Email">
                <Input onChange={onChange} value={form.value} name="email" />
            </FormGroup>
            <FormGroup label="GitHub / Source Code URL">
                <Input onChange={onChange} value={form.code} name="code" />
            </FormGroup>
            <FormGroup label="Comment">
                <Input onChange={onChange} value={form.comment} name="comment" />
            </FormGroup>
            <div className="text-center">
                <Button onClick={onSubmit} disabled={disabledSubmit} loading={loading} hover>
                    Send request
                </Button>
            </div>
        </Popup>
    )
}

export default RequestAuditPopup;