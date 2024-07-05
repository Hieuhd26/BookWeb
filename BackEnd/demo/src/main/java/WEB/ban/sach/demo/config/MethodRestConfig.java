package WEB.ban.sach.demo.config;

import WEB.ban.sach.demo.entity.TheLoai;
import jakarta.persistence.EntityManager;
import jakarta.persistence.metamodel.Type;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MethodRestConfig  implements RepositoryRestConfigurer {
    @Autowired
    private EntityManager entityManager;

    //private String url = "http://localhost:8080";
    private String url = "http://localhost:3000";

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(entityManager.getMetamodel().getEntities().stream().map(Type::getJavaType).toArray(Class[]::new));

        // chan method
        HttpMethod[] chanCacPhuongThuc ={
                HttpMethod.DELETE, HttpMethod.POST,
                HttpMethod.PATCH, HttpMethod.PUT
        };

       // config.exposeIdsFor(TheLoai.class);
       // disableHttpMethods(TheLoai.class, config,chanCacPhuongThuc);

        // CORS configuration
        cors.addMapping("/**")
                .allowedOrigins(url)
                .allowedMethods("GET", "POST", "PUT", "DELETE");


    }

    private void disableHttpMethods(Class c,
                                    RepositoryRestConfiguration config,
                                    HttpMethod[] methods){
        config.getExposureConfiguration()
                .forDomainType(c)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(methods))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(methods));
    }
}
