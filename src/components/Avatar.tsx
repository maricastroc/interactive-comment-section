import styles from "./Avatar.module.css";

interface AvatarProps {
    isMajor?: boolean,
    src: string
}

export function Avatar({isMajor = false, src}: AvatarProps) {
    return (
        <div
            className={
                isMajor
                    ? styles.avatarMajor
                    : styles.avatar
            }
        >
            <img src={src} alt="Profile Img" />
        </div>
    );
}
