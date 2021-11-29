// And the second one to render their password:

type PasswordInputProps = {
    value: string;
    onChange: (newPass: string) => void;
  }
  
  export const PasswordInput: React.FC<PasswordInputProps> = ({
    value,
    onChange,
  }) => {
    return <label>
      Your password:
      <input
        type="password"
        value={value}
        onChange={
            (e) => onChange(e.target.value)
        } />
    </label>
  }