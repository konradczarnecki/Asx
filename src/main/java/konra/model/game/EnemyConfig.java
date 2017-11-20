package konra.model.game;

import javax.persistence.*;

@Entity
@Table(name = "enemies")
public class EnemyConfig {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "name")
    private String name;

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

    @Column(name = "spawn")
    private float spawnChance;

    public EnemyConfig() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getSpawnChance() {
        return spawnChance;
    }

    public void setSpawnChance(float spawnChance) {
        this.spawnChance = spawnChance;
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
