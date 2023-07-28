public ComponentType GetComponent<ComponentType>()
{
    foreach (Component component in this.gameObject.components)
    {
        if (component is ComponentType)
            return (ComponentType)component;
    }
    
    return null;
}

Unity, her GameObject'in bir dizi component'e (bileşene) sahip olduğu bir component-based sistem kullanır. 
Bu component'ler, GameObject'in özelliklerini ve davranışlarını tanımlar. 
Örneğin, bir GameObject'in bir Transform bileşeni, bir Sprite Renderer bileşeni, bir Collider bileşeni ve bir RigidBody2D bileşeni olabilir.

  
