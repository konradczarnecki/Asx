package konra;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Entity
@Table(name = "locations")
public class LocationConfig {

    @Id
    @Column(name = "id")
    private String id;

    @OneToMany(mappedBy = "location", fetch = FetchType.EAGER)
    private Set<Element> elements;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @Fetch(value = FetchMode.SUBSELECT)
    @JoinTable(name = "location_enemies",
                joinColumns =        @JoinColumn(name = "location", referencedColumnName = "id"),
                inverseJoinColumns = @JoinColumn(name = "enemy", referencedColumnName = "id"))
    @JsonManagedReference
    private List<Enemy> enemies;

//    @ElementCollection
//    @MapKeyColumn(name = "direction")
//    @Column(name = "destination_id")
//    @CollectionTable(name = "neighbours", joinColumns = @JoinColumn(name = "location_id"))
//    private Map<String, String> neighbours;

    public LocationConfig() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Set<Element> getElements() {
        return elements;
    }

    public void setElements(Set<Element> elements) {
        this.elements = elements;
    }

    public List<Enemy> getEnemies() {
        return enemies;
    }

    public void setEnemies(List<Enemy> enemies) {
        this.enemies = enemies;
    }
}
