package konra;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "username")
    private String usrname;

    @Column(name = "pwd")
    private String password;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "character_id", referencedColumnName = "id")
    private CharacterConfig character;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "location", referencedColumnName = "id")
    private LocationConfig locationId;

    public User() {
    }

    public String getUsrname() {
        return usrname;
    }

    public void setUsrname(String usrname) {
        this.usrname = usrname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public CharacterConfig getCharacter() {
        return character;
    }

    public void setCharacter(CharacterConfig character) {
        this.character = character;
    }

    public LocationConfig getLocationId() {
        return locationId;
    }

    public void setLocationId(LocationConfig locationId) {
        this.locationId = locationId;
    }
}
