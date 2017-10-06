package konra;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "characters")
public class CharacterConfig {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private String id;

    @Column(name = "lvl")
    private int lvl;

    @Column(name = "exp")
    private int exp;

    @Column(name = "strength")
    private int strength;

    @Column(name = "dexteriety")
    private int dexteriety;

    @Column(name = "perception")
    private int perception;

    @Column(name = "intelligence")
    private int intelligence;

    @Column(name = "speed")
    private int speed;

//    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
//    private Weapon weapon;
//
//    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
//    private List<Clothing> clothing;

    public CharacterConfig() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getLvl() {
        return lvl;
    }

    public void setLvl(int lvl) {
        this.lvl = lvl;
    }

    public int getExp() {
        return exp;
    }

    public void setExp(int exp) {
        this.exp = exp;
    }

    public int getStrength() {
        return strength;
    }

    public void setStrength(int strength) {
        this.strength = strength;
    }

    public int getDexteriety() {
        return dexteriety;
    }

    public void setDexteriety(int dexteriety) {
        this.dexteriety = dexteriety;
    }

    public int getPerception() {
        return perception;
    }

    public void setPerception(int perception) {
        this.perception = perception;
    }

    public int getIntelligence() {
        return intelligence;
    }

    public void setIntelligence(int intelligence) {
        this.intelligence = intelligence;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }
}
