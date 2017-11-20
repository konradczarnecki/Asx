package konra.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import konra.model.game.CharacterConfig;
import konra.model.game.location.LocationConfig;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "username")
    private String username;

    @JsonIgnore
    @Column(name = "pwd")
    private String password;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "character_id", referencedColumnName = "id")
    private CharacterConfig character;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "location", referencedColumnName = "id")
    private LocationConfig location;

    public User() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String usrname) {
        this.username = usrname;
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

    public LocationConfig getLocation() {
        return location;
    }

    public void setLocation(LocationConfig location) {
        this.location = location;
    }
}
