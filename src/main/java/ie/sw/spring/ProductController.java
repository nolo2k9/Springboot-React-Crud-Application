package ie.sw.spring;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/products")
public class ProductController {

	@Autowired
	private ProductService service;

	@GetMapping("/products")
	public List<Product> list() {
		return service.listAll();
	}

	// Get products by their id
	@GetMapping("/{id}")
	public ResponseEntity<Product> get(@PathVariable Long id) {
		try {

			Product product = service.get(id);
			return new ResponseEntity<Product>(product, HttpStatus.OK);

		} catch (NoSuchElementException e) {

			return new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
		}

	}

	// Handle post requests
	@PostMapping("/products")
	public void add(@RequestBody Product product) {
		service.save(product);
	}

	// Update a product
	@PutMapping("/{id}")
	public ResponseEntity<?> update(@RequestBody Product product, @PathVariable Long id) {
		try {
			Product existProduct = service.get(id);
			service.save(product);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}

}
